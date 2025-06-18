import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "../styles/PostForm.module.css";

const PostForm = ({ onAdd }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const postData = {
      title: data.title,
      text: data.content,
    };

    axios
      .post("https://683ef3211cd60dca33ddb0f3.mockapi.io/posts", postData)
      .then((response) => {
        console.log("Data sent successfully", response);
        onAdd(response.data);
        reset();
      })
      .catch((error) => {
        console.error("Error while sending data", error);
      });
  };

  return (
    <div>
      <section className={styles.section}>
        <h1 className={styles.title}>Write Post</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              {...register("content", { required: true })}
              className={styles.textarea}
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default PostForm;
