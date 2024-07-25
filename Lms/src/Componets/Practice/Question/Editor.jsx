import { Box, Button, Card } from '@mui/material'
import { useEffect, useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";



export default function Editor({ select }) {

  let [prompt, setprompt] = useState("")
  let [res, setres] = useState("")



  useEffect(() => {
    function hendlegemini() {
      const apiKey = "AIzaSyD0633Qh1dx9fLt0Z-vcbsee4EL4AJ6qQM";
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };

      async function run() {
        const chatSession = model.startChat({
          generationConfig,
          history: [ ],
        });
        if (prompt) {
          const result = await chatSession.sendMessage(prompt);
          setres(result.response.text());
          console.log(result.response.text());
        } else {
          console.log("No prompt provided.");
        }
      }
      run();
    }
    hendlegemini()
  }, [prompt])

  function formsubmit(e) {
    e.preventDefault()
    setprompt(e.target[0].value = select.question)
    alert("wait some time")
  }

  function writehendle(e) {
    e.preventDefault()
    e.target[0].value = ""
  }


  return (
    <div>
      <form onSubmit={(e) => writehendle(e)}>
        <Card sx={{ display: "flex", alignItems: "center", justifyContent: 'center', flexDirection: "column", color: 'blueviolet', mt: "2rem" }}>
          <h2>Edior page</h2>
          <h4 style={{ fontSize: "1.5rem" }}>Q.{select.question}</h4>
        </Card>
        <textarea style={{ width: "100%", minHeight: "200px", marginTop: '20px', fontSize: "2rem" }}></textarea>
        <button style={{ marginLeft: "48%" }}><Button>submit</Button></button>
      </form>

      <form onSubmit={(e) => formsubmit(e)}>
        <input type="text" style={{ display: "none" }} />
        <button style={{ marginLeft: "44%" }}><Button variant='contained'>my i help you </Button></button>

      </form>
      <Box sx={{ backgroundColor: "white", wordSpacing: 3 }} >{res}</Box>
    </div>
  )
}
