import React from 'react';
import './App.css';
import HoverThang from './HoverThang';

// const addEventListenersToAllSegments = () => {        
//   for (const segment of getSegments()) {
//     addEventListenersTo(segment);
//   }
// }

// const getSegments = () => {
//   return document.querySelectorAll('[data-segment-id]');
// } 

// const addEventListenersTo = (segment) => {
//   segment.addEventListener('mouseover', handleMouseOverOnSegment);
//   segment.addEventListener('mouseout', handleMouseOutOnSegment);
// }

// const handleMouseOverOnSegment = (mouseOverEvent) => {
//   //console.log(this);
//   lightSelfAndPair(mouseOverEvent.currentTarget);
// }
// ///
// const handleMouseOutOnSegment = (mouseOutEvent) => {
//   dimSelfAndPair(mouseOutEvent.currentTarget);
// }

// const lightSelfAndPair = (segment) => {
//   lightSelf(segment);
//   lightPair(segment);
// }

// const lightSelf = (segment) => {
//   light(segment);
// }

// const lightPair = (segment) => {
//   light(getPairOf(segment));
// }

// const light = (segment) => {
//   segment.classList.add('lit');
// }

// const dimSelfAndPair = (segment) => {
//   dimSelf(segment);
//   dimPair(segment);
// }

// const dimSelf = (segment) => {
//   dim(segment);
// }

// const dimPair = (segment) => {
//   dim(getPairOf(segment));
// }

// const dim = (segment) => {
//   segment.classList.remove('lit');
// }

// getPairOf(segment) {
//   const [pair] = document.querySelectorAll(`[data-segment-id="${segment.dataset.segmentId}"]:not([data-language="${this.getLanguageOf(segment)}"]`);
//   return pair;
// }

// getLanguageOf(element) {
//   return element.dataset.language;
// }

// assignLanguagePropertyToAllSegments() {
//   for (const segment of this.getSegments()) {
//     this.assignLanguagePropertyTo(segment);
//   }
// }

// assignLanguagePropertyTo(segment) {
//   segment.setAttribute('data-language', this.getLanguageOf(segment.parentElement.parentElement.parentElement));
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <section data-language="spanish">
          <div data-sentence-number="1">
            <p><span data-segment-id="1">Se empeña don Miguel de Unamuno </span><span data-segment-id="2">en que ponga yo un prólogo a este su libro </span><span data-segment-id="3">en que se relata la tan lamentable historia </span><span data-segment-id="4">de mi buen amigo Augusto Pérez y su misteriosa muerte, </span><span data-segment-id="5">y yo no puedo menos sino escribirlo, </span><span data-segment-id="6">porque los deseos del señor Unamuno son para mí mandatos, </span><span data-segment-id="7">en la más genuina acepción de este vocablo.</span></p>
          </div>
        </section>
        <HoverThang />
        <section data-language="english">
          <div data-sentence-number="1">
              <p><span data-segment-id="1">Don Miguel de Unamuno is adamant </span><span data-segment-id="2">that I write a prologue for this book of his </span><span data-segment-id="3">in which he tells the lamentable story </span><span data-segment-id="4">of my good friend Augusto Pérez and his mysterious death; </span><span data-segment-id="5">therefore I have no choice but to write it, </span><span data-segment-id="6">as the wishes of Mr. Unamuno are for me commands, </span><span data-segment-id="7">in the most genuine sense of the word.</span></p>
          </div>
        </section>
      </div>
    );
  }

  // componentDidMount?() {
  //   addEventListenersToAllSegments()
  //   assignLanguagePropertyToAllSegments();    
  // }

  doThing() {
    console.log('thing');
  }
}

export default App;
