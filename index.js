const fetchAdvice = async () => {
  let url = "https://api.adviceslip.com/advice";
  try {
    let res = await fetch(url);
    const data = await res.json();
    console.log(data);
    document.getElementById("advice").innerHTML = `Advice #${data.slip.id}`
    document.getElementById("quote").innerHTML = `"${data.slip.advice}"`
  } catch (error) {
    console.log(error)
  }
};
fetchAdvice()
