import { Hearts } from "react-loader-spinner";

export default function Loader() {
  return (
    <Hearts
      height="80"
      width="80"
      color="red"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
