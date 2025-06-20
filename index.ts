MarryValuable:
{
  let marry = -1000;
  let self = 1000;

  LoosingLoop: /*will continue*/ 
  while (marry) { /* is stil */
    console.log("I'm now %i",self -= marry);
    continue LoosingLoop;
    // you never touch it please dough this continue and hit stop case 
    if (self == 0) {
      // after you loss self.
      break losingLoop;
    }
  }
}
