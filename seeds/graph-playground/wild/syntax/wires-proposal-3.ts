// TODO: flesh out more syntax examples. key change is in order:

// current
nodeA.wire('description->text', nodeB);

// proposed:
nodeA.wire('description').to(nodeB('text'))


// longer version
const board = new Board();
const output = board.output();
const askUserNode = board.input();
const kit = board.addKit(ChatAgent)
const translateToJapaneseNode = kit.chatWith("can you translate this to japanese for me?");

askUserNode
  .wireTo(kit.ChatWith("please translate this to Japanese:")
  .wireTo(kit.ChatWith("please make this very formal")
  .wireTo(board.output()); 
