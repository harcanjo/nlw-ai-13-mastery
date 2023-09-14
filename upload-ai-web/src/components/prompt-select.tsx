import { api } from "@/lib/axios";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import { useEffect, useState } from "react";

interface Prompt {
  id: string
  title: string
  template: string
}

export function PromptSelect() {
  const [prompts, setPrompts] = useState<Prompt[] | null>(null)

  useEffect(() => {
    api.get('/prompts').then(response => {
      // console.log(response.data)
      setPrompts(response.data)
    })
  }, [])


  return (
    <>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecione um prompt..." />
        </SelectTrigger>
        <SelectContent>
          {prompts?.map(prompt => {
            return (
              <SelectItem key={prompt.id} value={prompt.id}>
                {prompt.title}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </>
  )
}