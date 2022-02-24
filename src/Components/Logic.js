// let messageBit = "011000110110100100101010"
// let divBlockBit = 6;

function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

const calXOR = (a, b) => {
  let xor = "";
  for (let i = a.length - 1; i >= 0; i--) {
    xor += (parseInt(a[i]) ^ parseInt(b[i]));
  }
  return reverseString(xor);
}

const leftShiftString = (string) => {
  string = string.split("");
  let temp = string.shift();
  string = string.toString();
  string = string.replace(/,/g, "");
  return string + temp;
}

export const calcSimpleHash = (messageBit, divBlockBit) => {
  if (messageBit.toString() === "") return
  let blocks = [];
  let blockNum = (messageBit.length) / divBlockBit
  let start = 0, end = divBlockBit;
  for (let i = 0; i < blockNum; i++) {
    // console.log(start,end,blockNum);
    blocks[i] = messageBit.slice(start, end)
    start = start + divBlockBit;
    end = end + divBlockBit;
  }
  // console.log(blockNum);
  let hash = "";
  for (let i = 0; i < blocks.length - 1; i++) {
    if (hash === "") {
      hash = `${calXOR(blocks[i], blocks[i + 1])}`
      continue;
    }
    hash = calXOR(hash, blocks[i + 1]);
  }
  return hash;
}

export const calcCircularHash = (messageBit, divBlockBit) => {
  if (messageBit.toString() === "") return
  let blocks = [];
  let blockNum = (messageBit.length + 1) / divBlockBit
  let start = 0, end = divBlockBit;
  for (let i = 0; i < blockNum - 1; i++) {
    blocks[i] = messageBit.slice(start, end)
    start = start + divBlockBit;
    end = end + divBlockBit;
  }
  let circularHash = Array(divBlockBit).fill(0).toString().replace(/,/g, "");
  let temp = ""
  for (let i = 0; i < blocks.length; i++) {
    if (parseInt(circularHash) === 0) {
      temp = calXOR(circularHash, blocks[i])
      circularHash = leftShiftString(temp);
      continue;
    }
    temp = calXOR(circularHash, blocks[i]);
    circularHash = leftShiftString(temp);
  }
  return temp;
}

