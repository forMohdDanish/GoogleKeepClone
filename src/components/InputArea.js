import React from 'react'
import AddIcon from '@material-ui/icons/Add';
export default function InputArea(props) {
    const [state, setstate] = React.useState({
        title: "",
        content: ""})

        function handleChange(e){
            setstate({...state,[e.target.name]:e.target.value});

        }
        function submitNote(e){
            e.preventDefault();
            if(state.title!=="" || state.content!==""){ props.Add(state);}
           
            setstate({ title: "",content: ""})
        }

    return (
        <div>
      <form>
         
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={state.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={state.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}><AddIcon/></button>
      </form>
    </div>
    )
}
