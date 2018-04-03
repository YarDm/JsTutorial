function Graph(node_list) {

    let graph = {};
    node_list.forEach((node) => {   //идем по каждому элементу ребра
        let p1 = node[0];
        let p2 = node[1];
        let weight = node[2];
        if (!graph[p1]) {           //если первый отсутствует создаем новый
            graph[p1] = {};
        }
        if (!graph[p2]) {           //если второй отсутствует создаем новый
            graph[p2] = {};
        }


        graph[p1][p2] = weight;
        graph[p2][p1] = weight; //закомментировать если граф имеет направление
    });



    this.DFP = function (startNode, endNode) {
        let nodes = {};

        let node = startNode;
        nodes[node] = { weight : 0, prev : null, finish : false }

        while (node != null) { // Пока есть следующая вершина
            // Смотрим все соседей
            for (next in graph[node]) {
                let new_weight = nodes[node].weight + graph[node][next];
                if (!nodes[next] || nodes[next].weight > new_weight) {
                    nodes[next] = { weight : new_weight, prev : node }
                }
            }

            nodes[node].finish = true;

            node = null;
            let min = Infinity;
            for (next in nodes) {
                if (!nodes[next].finish && nodes[next].weight < min) {
                    node = next;
                    min = nodes[next].weight;
                }
            }
        }

        if (!nodes[endNode]) {
            return "path from " + startNode + " to " + endNode + " not found";
        }

        let ss = "" + endNode + "  =  " + nodes[endNode].weight;
        node = nodes[endNode].prev;
        while (node != null) {
            ss = "" + node + " -> " + ss;
            node = nodes[node].prev;
        }
        return ss;
    }

}

let graph2 = new Graph( [[0, 3, 5], [1, 3, 11], [2, 3, 56], [4, 3, 77], [5, 4, 89]] );
console.log(graph2.DFP(3, 3));
console.log(graph2.DFP(1, 5));