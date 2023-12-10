import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import reset from "../reset.png"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [companyDescription, setCompanyDescription] = useState("");
  const [result, setResult] = useState();
  const [numWords, setNumWords] = useState(2);
  const [maxNumSyllables, setMaxNumSyllables] = useState(2);
  const [color, setColor] = useState("black");
  function onClick() {
    setResult("");
    setCompanyDescription("");
  }
  function toBlank() {
    setCompanyDescription("");
  }
  function toggleColors(e) {
    e.preventDefault();
    console.log('clicked');
    let btn = document.querySelector(".btn-a");
    let resultDiv = document.querySelector("#result_div");
    if (color === "black") {
      resultDiv.style.backgroundColor = "white"
      resultDiv.style.color = "black"
      setColor("white")
    }
    else {
      resultDiv.style.backgroundColor = "black"
      resultDiv.style.color = "white"
      setColor("black")
    }
    // document.result.style.backgroundColor = backgroundColor;
    // document.body.style.color = textColor;
    // document.querySelector('.output').innerText = `Background: ${backgroundColor}, Text: ${textColor}`;
    // return 1;
  }
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: companyDescription, numWords: numWords, maxNumSyllables: maxNumSyllables }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>What we eat today?</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
      <div class="link"  style={{display:"flex"}}>
        <Link href="/"style={{backgroundColor:"#02fbf7",color:"white",marginRight: "5px", padding: "1px 30px",textDecoration:"none"}}>
        {/* <Link href="/Writing/pages/index" target="blank"> */}
        Summarization
        </Link>
        <Link href="/Writing"style={{backgroundColor:"#02fbf7",color:"white",padding: "1px 43px",textDecoration:"none"}}>
        {/* <Link href="/Writing/pages/index" target="blank"> */}
        Writing
        </Link>
        </div>

        <form onSubmit={onSubmit}>
          <div class="my-box" style={{ display: "flex", flexDirection: "column" }}>
            <textarea
              id="chatBox"
              name="FOOD"
              placeholder=" Enter the text you want to ask..."
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              style={{ marginBottom: "10px" ,marginTop:"10px"}}
            />

            <div class= "mainButton" style={{ display: "flex" }}>
              {/*  */}
              <button type="submit" id ="submit11" value="Generate Summarized text" style={{ marginRight: "10px", padding: "1px 100px"}}>Submit</button>
              {/* <button type="button" onClick={(e) => setCompanyDescription("") && setResult("")} ><img src="https://banner2.cleanpng.com/20180203/qfq/kisspng-reset-button-icon-restart-png-free-download-5a75888d69d601.2504583515176521094335.jpg"  width="20" height="40" alt="reset"/></button> */}

              <button type="button" id="reset111" style={{backgroundColor: "transparent",padding: "1px 32px"}}onClick={(e) => onClick()} >
                <Image
                  src={reset}
                  width={31}
                  height={31}
                  alt="Picture of the author"
                />
              </button>
            </div>
          </div>
        </form>
        <div className={styles.result} id="result_div">{result}</div>



        {/* <button className="btn btn-a" id = "change111" onClick={toggleColors}>Button A</button> */}

      </main>
    </div>
  );
}