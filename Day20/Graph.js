class Queue{
    constructor(){
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }
    
    //[+] enqueue(element) - add an element ti the queue
    enqueue(element){
        this.items[this.rear] = element;
        this.rear++;
    }
    
    //[+] dequeue() - remove the oldest element from the queue
    dequeue(){
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }
    
    // [+] isEmpty() - check if the queue is is empty 
    isEmpty(){
        return (this.rear - this.front) === 0;
    }
    
    // [+] peek() - get the value of the element at the front of the queue without removing it 
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front];
        }
        return null;
    }
    
    // [+] size() - get the number of the elements in the queue 
    size(){
        return this.rear - this.front;
    }
    
    // [+] print() - visualize the elements in the queue 
    print(){
        var s = ""
        for(let key of Object.keys(this.items)){
            s += this.items[key] + " ";
        }
        console.log(s);
    }
}
class Graph{
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }

    //[+] addVertex(v)
    addVertex(vertex){
        this.adjList.set(vertex,[]);
    }

    //[+] addEdge(v, w)
    addEdge(v1,v2){
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v3);
    }

    //[+] printGraph()
    printGraph(){
        var keys = this.adjList.keys();
        for(var key of keys){
            var key_values = this.adjList.get(key);
            var str = "";
            for(var key_value of key_values){
                str += key_value + " ";
            }  
            console.log(key + " -> " + str);
        }
    }
 
    //[+] bfs(v)
    bfs(startingNode){
        var visited = {};
        var q = new Queue();
        visited[startingNode] = true;
        q.enqueue(startingNode);

        while(!q.isEmpty()){
            var getQueueElement = q.dequeue();
            console.log(getQueueElement);
            var get_List = this.adjList.get(getQueueElement);
            for(var value in get_List){
                var neigh = get_List[value]
                if(!visited[neigh]){
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }
    //[+] dfs(v)
    dfs(startingNode){
        var visited = {}
        this.DFSUtil(startingNode, visited);
    }
    DFSUtil(vertex, visited){
        visited[vertex] = true;
        console.log(vertex);
        var get_neighbour = this.adjList.get(vertex);
        for(var i in get_neighbour){
            var get_elem = get_neighbour[i];
            if(!visited[get_elem]){
                this.DFSUtil(get_elem,visited);
            }
        }
    }
}

var q = new Queue();