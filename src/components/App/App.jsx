import React from 'react';
import './App.css';
import Nav from './../Nav/Nav';
import Landing from './../Landing/Landing';
import Footer from './../Footer/Footer';
import ChallengeSection from './../ChallengeSection/ChallengeSection';
const totaltime=60;
const DefaultState={
    selectedparagraph:"",
    timeStarted:false,
    timeRemaining:totaltime,
    characters:0,
    words:0,
    wpm:0,
    testInfo:[]
};
const serviceurl="https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text";
class App extends React.Component{
    state=DefaultState;

    fetchNewParagraph=()=>{
        fetch(serviceurl)
        .then(response=>response.text())
        .then((data)=>{
            const selectedparagraphArray=data.split("");
             const testInfo=selectedparagraphArray.map((charselected)=> {
               return{
                   testletter: charselected,
                    status: "notattempted"
                       
               }

           });
         this.setState({...DefaultState,testInfo,selectedparagraph:data});
        });
    }
    componentDidMount(){
       this.fetchNewParagraph();
    }

    startTimer=()=>{
        this.setState({timeStarted:true});
        const timer=setInterval(()=>{
            const timespent=totaltime-this.state.timeRemaining;
            const wpm= timespent>0 ? ((this.state.words/timespent)*totaltime):0;
            if(this.state.timeRemaining>0)
            this.setState({timeRemaining:this.state.timeRemaining-1,wpm:parseInt(wpm)});
            else
            clearInterval(timer);
        },1000);
    }

    startAgain=()=>{
        this.fetchNewParagraph();
    }
    handleInput=(inputValue)=>{
        if(!(this.state.timeStarted))
        this.startTimer();

         /**
         * 1. Handle the underflow case - all characters should be shown as not-attempted
         * 2. Handle the overflow case - early exit
         * 3. Handle the backspace case
         *      - Mark the [index+1] element as notAttempted
         *        (irrespective of whether the index is less than zero)
         *      - But, don't forget to check for the overflow here
         *        (index + 1 -> out of bound, when index === length-1)
         * 4. Update the status in test info
         *      1. Find out the last character in the inputValue and it's index
         *      2. Check if the character at same index in testInfo (state) matches
         *      3. Yes -> Correct
         *         No  -> Incorrect (Mistake++)
         * 5. Irrespective of the case, characters, words and wpm can be updated
         */

          const characters = inputValue.length;
          const words = inputValue.split(" ").length;
          const index = characters - 1;
  
          if (index < 0) {
              this.setState({
                  testInfo: [
                      {
                          testLetter: this.state.testInfo[0].testletter,
                          status: "notAttempted",
                      },
                      ...this.state.testInfo.slice(1),
                  ],
                  characters,
                  words,
              });
  
              return;
          }
  
          if (index >= this.state.selectedparagraph.length) {
              this.setState({
                  characters,
                  words,
              });
              return;
          }
  
          // Make a copy
          const testInfo = this.state.testInfo;
          if (!(index === this.state.selectedparagraph.length - 1))
              testInfo[index + 1].status = "notAttempted";
  
          // Check for mistake
          const isMistake = inputValue[index] === testInfo[index].testletter;
  
          // Update the testInfo
          testInfo[index].status = isMistake ? "correct" : "incorrect";
  
          // Update the state
          this.setState({
              testInfo,
              words,
              characters,
          });
    }

    render(){
        

        return (
            <div className="app">
                <Nav />
                <Landing />
                <ChallengeSection words={this.state.words} characters={this.state.characters} wpm={this.state.wpm}
                timeStarted={this.state.timeStarted} timeRemaining={this.state.timeRemaining} 
                selectedparagraph={this.state.selectedparagraph} testInfo={this.state.testInfo}
                onInputchange={this.handleInput} startAgain={this.startAgain}/>
                <Footer />
            </div>
        )
    }
}
export default App;