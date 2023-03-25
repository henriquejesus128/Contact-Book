import { useForm } from "react-hook-form";
import { IReqSession } from "../../interface";
import { yupResolver } from "@hookform/resolvers/yup";

const Session = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReqSession>({
    resolver: yupResolver(),
  });
  return (
    <>
      <header></header>
      <main></main>
      <footer></footer>
    </>
  );
};

export default Session;
