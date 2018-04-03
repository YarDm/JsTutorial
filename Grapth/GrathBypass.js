function Graph(node_list) {

    let graph = {};
    node_list.forEach((node) => {   //идем по каждому элементу графа
        let p1 = node[0];
        let p2 = node[1];
        if (!graph[p1]) {           //если первый отсутствует создаем новый
            graph[p1] = {};
        }
        if (!graph[p2]) {           //если второй отсутствует создаем новый
            graph[p2] = {};
        }


        graph[p1][p2] = true;       //создаем структуру графа
        graph[p2][p1] = true; //закоментировать если граф направленный
    });

    this.DFS = function (startNode) {
        let visited = {};

        function nodeSwitcher(node){        //рекурсивная функция для обхода вершин
            console.log(node);
            visited[node] = true;           //к каждой обойденной вершине добавляем флаг
            for (let next in graph[node]){  //для каждой следующей вершины существующей в графе
                if (!visited[next]){        //если она еще не посещена
                    nodeSwitcher(next);     //запускаем обход
                }
            }
        }
        nodeSwitcher(startNode);

    };

    this.BFS = function (startNode) {
        let visited = {};                   //посещенные вершины
        let carrying = [];                  //предстоящие вершины
        carrying.push(startNode);           //засовывем в предстоящие вершину с иерархией

        while (carrying.length > 0){        //пока предстоящие вершины не пусты
            let node = carrying.shift();    //берем первый элемент, одновременно удаляя его из предстоящих
            console.log(node);
            visited[node] = true;           //записываем его в посещенные, добавляем флаг

            for (let next in graph[node]){  //берем следующий элемент в иерархии
                if (!visited[next]){        //если он еще не посещался
                    carrying.push(next);    //добавляем его в предстоящие
                }
            }
        }

    };
}

let graph1 = new Graph( [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]] );
graph1.BFS(4);
graph1.DFS(4);