import React, { useEffect, useState } from "react";
import { Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./ProfileInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { avatarUpload } from "../../store/slices/auth";

const getBase64 = (img, callback) => {
  if (!img) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const ProfileAvatar = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const { avatar } = useSelector((state) => state.auth.profile);

  useEffect(() => {
    getBase64(avatar, setUrl);
  }, [avatar]);

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    dispatch(avatarUpload(file));
    return false;
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div>Загрузить аватарку</div>
    </div>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className={styles.avatar}
      showUploadList={false}
      beforeUpload={beforeUpload}
    >
      {url ? (
        <img src={url} alt="avatar" style={{ width: "100%" }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default ProfileAvatar;
