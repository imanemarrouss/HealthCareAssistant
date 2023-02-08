import React, {  useState  } from 'react'
import { Form, TextArea, Button, Loader } from 'semantic-ui-react';
import { Configuration, OpenAIApi } from "openai";

const Drug = () =>  {
 
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
            prompt: `your a bot that takes a name of a drug as an input and generate what do we use it for\n${inputText}`,
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
        <h2 className="header">Drug Description</h2>
      </div>

      <div className='app-body'>
        <div>
          <Form>
            <Form.Field
              control={TextArea}
              placeholder='Type a name of a drug Here..'
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
              placeholder='Here Is The Answer..'
              value={responseText}
              disabled={isLoading}
            />
          </Form>
        </div>
      </div>
    </div>
            
        );
    }










export default Drug;
