// TODO write some samples more like

nodeA.wire('description').to(nodeB('text'))
// instead of 
board.input().wire("say->text", kit.generateText()).wire("say->", output);
