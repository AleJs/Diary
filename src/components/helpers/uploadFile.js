export const uploadFile = async (file) => {
  const url = "https://api.cloudinary.com/v1_1/alejs/image/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-practice");
  formData.append("file", file);

  try {
    const resp = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (resp.ok) {
      const cloudResp = await resp.json();
      return cloudResp.secure_url;
    } else {
      throw resp.json();
    }
  } catch (error) {
    throw error;
  }
};
