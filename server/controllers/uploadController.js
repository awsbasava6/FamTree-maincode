export const getUploadUrl = async (req, res) => {
  try {
    const key = `${Date.now()}.jpg`;

    const url = s3.getSignedUrl("putObject", {
      Bucket: process.env.BUCKET_NAME,
      Key: key,
      Expires: 60,
      ContentType: "image/jpeg",
    });

    res.json({ url, key });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to generate URL" });
  }
};

