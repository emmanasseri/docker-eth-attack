import type { FC } from "react";

const Node: FC<any> = (id: number) => {

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: 80,
    height: 80,
    borderRadius: 3200,
    borderWidth: 2,
    borderColor: "#000000",
    borderStyle: "solid",
  };
  
  return (
  
    <div
        style={{
            display: "inline-block",
            padding: 5,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={style} key={id.toString()}>
            <span style={{ fontWeight: "bold" }}>{id}</span>
          </div>
    </div>
  )
}
export default Node;
  