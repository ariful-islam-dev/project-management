import { action } from 'easy-peasy'

const model = {
    projects:[
        {
            id: 'abojzesdflaj',
            title: 'Food Gorzia',
            description: "Hi, This is food gorzia online fast food shop. It's open 24 hours for every body service",
            tasks: []
        }
    ],
    tasks:[],
    addProject: action((state, payload)=>{
        (prev=>([
            ...prev,
            payload
        ]))
    }),

    addTask : action((state, payload)=>{
      
         state.tasks.push(payload)
})
}

export default model