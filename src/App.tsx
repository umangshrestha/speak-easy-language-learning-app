import './App.css'
import React, {useEffect, useState} from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import words from "./assets/words_01.json"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


function App() {
  const [from, setFrom] = useState("en-US")
  const [to, setTo] = useState("np-NP")
  const [showTranslation, setShowTranslation] = useState(true)
  const [idx, setIdx] = useState(0)


  const defination = words[idx]
  console.log(defination[to].audio)
  return (
    <section className="flex flex-col items-center">
    <TooltipProvider>
    <Card className="w-64">
      <CardHeader>
        <CardTitle>
        <Tooltip>
                <TooltipTrigger>
                {defination[from].text}
                </TooltipTrigger>
                <TooltipContent>
                  {defination[from].transliteration[to]}
                </TooltipContent>
              </Tooltip>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <img src={defination.image} alt={defination.id}  width="200" height="200"/>
        <CardDescription>
              
          </CardDescription>
        <CardDescription>
 
                {defination[to].text}
                <br/>
                  {defination[to].transliteration[from]}
               
          </CardDescription>
      </CardContent>
      <CardFooter>
            <audio controls key={defination[to].audio}>
            <source src={defination[to].audio} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
      </CardFooter>
    </Card>
    </TooltipProvider>
    
    <div className="flex justify-around space-x-4">
      <button onClick={() => setIdx((idx) => idx - 1)} disabled={idx === 0}>
        Prev
      </button>
      <button onClick={() => setIdx((idx) => idx + 1)} disabled={idx === words.length - 1}>
        Next
      </button>
    </div>
    </section>
  )

 
}

export default App
