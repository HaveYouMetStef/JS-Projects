// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum: specimenNum,
    dna: dna,

    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();

      while (this.dna[randomIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna
    },

    //compare method
    compareDNA(otherPAequor) {
       let identicalBases = 0;

       //loop through the array and compare the bases
       for(let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === otherPAequor.dna[i]) {
          identicalBases++;
        }
       }

       const percentage = ((identicalBases / this.dna.length) * 100).toFixed(2);
       console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentage}% DNA in common.`)
    },

    willLikelySurvive() {
      const survivalBases = this.dna.filter(base => base === 'C' || base === 'G');
      const survivalRate = (survivalBases.length / this.dna.length) * 100;

      return survivalRate >= 60;
    }
  };
}

const survivalPAequor = [];

let specimenCount = 1;

while(survivalPAequor.length < 30) {
  const newPAequor = pAequorFactory(specimenCount, mockUpStrand());

  if (newPAequor.willLikelySurvive()) {
    survivalPAequor.push(newPAequor);
    specimenCount++;
  }
}

console.log(`Generated ${survivalPAequor.length} survivable P. aequor:`)
console.log(survivalPAequor);

const specimen1 = pAequorFactory(1, mockUpStrand())
const specimen2 = pAequorFactory(2, mockUpStrand())

console.log('Specimen 1 DNA:', specimen1.dna)
console.log('Specimen 2 DNA:', specimen2.dna)

specimen1.compareDNA(specimen2);
/*
const organism = pAequorFactory(1, mockUpStrand());

console.log('Original DNA:', organism.dna);
organism.mutate()
console.log('Mutated DNA:', organism.dna);
*/







