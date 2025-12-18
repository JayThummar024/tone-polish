export const refineText = async (text) => {
  try {
    const response = await fetch("http://localhost:8080/api/refine", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error("Failed to refine text");
    }

    return await response.text();
  } catch (error) {
    console.error(error);
    throw error;
  }
};