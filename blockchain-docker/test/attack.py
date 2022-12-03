"""
Created by Michael Keleti

This script initiates a 51% attack.
"""
import docker
CLIENT = docker.from_env()
IMAGE = "mkeleti/geth-attack"
BOOTNODE = '"enode://43974299a4c52b220d8eed430a7ed1479f29548041e3ca67ddc1a4886835878c174d45dfd9e73ebd4901e8071c5bb19003f52e4e408e8ec5ce350f8f74a335a8@255.255.255.242:30301"'
"""
This method is responsible for fetching each geth node
and returning them as a dictionary sorted by function.
"""
def fetchNodes():
  # Defines node dictionary to return
  nodes = {"miners": [], "rpcs": [], "boots": []}
  # For each container currently running
  for container in CLIENT.containers.list():
    image = str(container.image)
    node_name = container.name
    # If the image containers the keyword "geth"
    if image.count("geth") > 0:
      # If the container_name contains a keyword
      # append to the list of nodes
      if node_name.count("miner") > 0:
        nodes["miners"].append(container)
      elif node_name.count("rpc") > 0:
        nodes["rpcs"].append(container)
      elif node_name.count("boot") > 0:
        nodes["boots"].append(container)
  
  # Node dictionary is returned
  return nodes


def createMiner(key, port):
  miners = fetchNodes()["miners"]
  miner_num = len(miners) + 1
  miner_name = "minerNode" + str(miner_num)
  cmds = ["--mine",
          "--miner.noverify",
          "--unlock "+key,
          "miner.etherbase "+key,
          "--password /root/.ethereum/password.txt",
          "--port "+str(port),
          "--bootnodes " + BOOTNODE
          ]
  args= {
    "detach": True,
    "name": miner_name,
    "cgroup_parent": "docker-eth-attack",
    "volumes_from": [miners[0].id],
    "ports": {str(port)+"/tcp": port}
  }
  return CLIENT.containers.run(IMAGE, **args)

createMiner("0xf30e8252fd22963b15b93ef34324575f4acc437a", 30330)
def createRpc(containers):
  

  return CLIENT.containers.run(IMAGE, detach=True)
  
def createBootnode(containers):


  return CLIENT.containers.run(IMAGE, detach=True)


"""
This function creates a node with a specified set of commands
"""
def createNode(type):
  types = {
    "miner": createMiner(),
    "rpc": createRpc(),
    "boot": createBootnode()
  }
  
  types.get(type, print("Incorrect type, must be miner, rpc, or boot"))
  

# createNode("yes")
  

