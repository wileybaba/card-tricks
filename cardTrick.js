const vals = [1,2,3,4,5,6,7,8,9,10, 10, 10, 10]
const suits = ["heart", "spade", "club", "diamond"]

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function stack(deck) {
  let topCard = deck.pop()
  let stackCount = topCard.value;
  const popCards = []
  let i = 1;
  while (stackCount < 13) {
    let drawnCard = deck.pop();
    stackCount += 1;
    i ++;
    popCards.push(drawnCard)
  }
  return {
    topCard:topCard.value,
    stackCount:i,
    deck,
    popCards
  };
}

function deck(vals, suits) {
  const retval = []
  vals.forEach((value) => {
    suits.forEach((suit) => {
      retval.push({ suit, value})
    })
  })
  return shuffle(retval)
  
}

let Deck = deck(vals, suits);
console.log(Deck, 'hi')

// let topCard = Deck.pop();
// console.log(topCard)
// console.log(Deck.length)
const stacks = [];
for (let i = 0; i < 6; i++) {
  Deck = stack(Deck).deck
  stacks.push(Deck);
}
console.log(stacks)
deck = Deck;
console.log({deck});

const pop1 = stacks.pop();
const pop2 = stacks.pop();
const pop3 = stacks.pop();

pop1.popCards.forEach((card) => {
  deck.push(card)
})
pop2.popCards.forEach((card) => {
  deck.push(card)
})
pop3.popCards.forEach((card) => {
  deck.push(card)
})

const pop4TopCards = stacks.pop().topCard;


let combinedTopCardValue = stack[0].topCard + stack[1].topCard + 10;

for (let i=0; i< combinedTopCardValue - 1; i++) {
  deck.pop();
}

console.log(deck[0], deck.pop());

