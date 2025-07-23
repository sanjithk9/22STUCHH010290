// src/pages/ShortenPage.js
import React, { useState } from 'react';
import { Log } from '../utils/logging_middleware';
import { TextField, Button, Box, Typography } from '@mui/material';

const ShortenPage = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    if (!url || !url.startsWith('http')) {
      await Log("frontend", "error", "ShortenPage", "Invalid URL entered");
      alert("Invalid URL. Please enter a valid URL.");
      return;
    }

    await Log("frontend", "info", "ShortenPage", "Sending URL to backend");

    try {
      const response = await fetch("http://localhost:5000/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });

      const data = await response.json();

      if (data.shortUrl) {
        setShortUrl(data.shortUrl);
        await Log("frontend", "info", "ShortenPage", Short URL generated: ${data.shortUrl});
      } else {
        throw new Error("Invalid response");
      }
    } catch (error) {
      console.error(error);
      await Log("frontend", "error", "ShortenPage", Failed to shorten URL: ${error.message});
    }
  };

  return (
    <Box>
      <Typography variant="h5">Shorten a URL</Typography>
      <TextField
        label="Enter URL"
        variant="outlined"
        fullWidth
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        sx={{ mt: 2, mb: 2 }}
      />
      <Button variant="contained" onClick={handleShorten}>Shorten</Button>
      {shortUrl && <Typography variant="body1" sx={{ mt: 2 }}>Shortened URL: {shortUrl}</Typography>}
    </Box>
  );
};

export default ShortenPage;