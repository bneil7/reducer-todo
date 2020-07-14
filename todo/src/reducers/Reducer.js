export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_NEW_ITEM':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Math.random()
                }
            ]
            case 'COMPLETE_TASK':
                return state.map(item => {
                    if(item.id === action.payload){
                        return{
                            ...item,
                            completed: true
                        } 
                    } else {
                        return item;
                    }
                })

                case 'FILTER':
                    return state.filter(item => !item.completed);

                default:
                    return state;
    }
}