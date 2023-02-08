import React, {  useState  } from 'react'
import { Form, TextArea, Button, Loader } from 'semantic-ui-react';
import { Configuration, OpenAIApi } from "openai";

const About = () =>  {
 
    const configuration = new Configuration({
        organization: "org-F2tHHA07NQRCzuPn5hNQA12F",
          apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);

      const [inputText, setInputText] = useState('');
      const [responseText, setResponseText] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState(null);
    
      const getOpenAIResponse = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: `your a bot that Assist with medical diagnoses: You could use the OpenAI API
             to assist with medical diagnoses by suggesting relevant information based on the patient's symptoms.
              you could take the symptoms as input and generate a list of potential conditions,
               along with their likelihood, based on information in medical databases and research papers:\n${inputText}`,
            max_tokens: 200,
            temperature: 0.5,
          });
          setResponseText(response.data.choices[0].text);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }


    
        return (
            
                <div className="App">
      <div className="app-header">
        <h2 className="header">Explain your symptoms</h2>
      </div>

      <div className='app-body'>
        <div>
          <Form>
            <Form.Field
              control={TextArea}
              placeholder='Type Your Question Here..'
              onChange={(e) => setInputText(e.target.value)}
            />
            <Button primary
               className='button'
              color="green"
              size="large"
              onClick={getOpenAIResponse}
              disabled={isLoading}
              
            >
              Submit
            </Button>
            {isLoading && <Loader active inline='centered' />}
            {error && <p>An error occurred: {error.message}</p>}
            <Form.Field
              control={TextArea}
              placeholder='Here Is The Resault..'
              value={responseText}
              disabled={isLoading}
            />
          </Form>
        </div>
      </div>
    </div>
            
        );
    }










export default About;
