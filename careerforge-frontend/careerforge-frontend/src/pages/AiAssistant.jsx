import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function AiAssistant() {

    const [question, setQuestion] = useState("");

    const [answer, setAnswer] = useState("");

    const askAI = async () => {

        setAnswer("AI integration will be connected here.");

    };

    return (

        <Box p={4}>

            <Typography
                variant="h4"
                gutterBottom
            >

                AI Placement Assistant

            </Typography>

            <TextField
                fullWidth
                multiline
                rows={4}
                value={question}
                onChange={(e)=>setQuestion(e.target.value)}
                placeholder="Ask anything..."
            />

            <Button
                sx={{mt:2}}
                variant="contained"
                onClick={askAI}
            >

                Ask AI

            </Button>

            <Paper
                sx={{
                    p:3,
                    mt:3
                }}
            >

                <Typography>

                    {answer}

                </Typography>

            </Paper>

        </Box>

    );

}
