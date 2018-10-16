import { message } from "antd";

const MutationMessage = ({ mutation, error, success, loading }) => {
  if (mutation.data && !mutation.error && success) {
    setTimeout(() =>
      message.success(typeof success == "string" ? success : "Success !")
    );
  }
  if (mutation.error && error)
    setTimeout(() =>
      message.error(typeof error == "string" ? error : mutation.error.message)
    );

  return null;
};

export default MutationMessage;
