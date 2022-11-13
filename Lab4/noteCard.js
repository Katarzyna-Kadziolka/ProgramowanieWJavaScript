const template = document.createElement('template');

template.innerHTML = `
    <style>
    .note {
        background: #cce6ff;
        border: 3px solid #80bfff;
        border-radius: 4px;
        width: 12rem;
        min-height: 12rem;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        word-wrap: break-word;
        margin-left: 2rem;
    }
    .note-header {
        display: flex;
        justify-content: space-between;
    }
    .title {
        font-size: 1.5rem;
    }
    .pin {
        opacity: 50%;
    }
    hr {
        width:80%;
        text-align:left;
        margin-left:0
    }
    .date {
        opacity: 80%;
        font-size: 0.8rem;
    }
    .color-picker-container {
        display: flex;
        justify-content: flex-end;
    }
    .color-picker {
        width: 1.5rem;
        height: 1.5rem;
    }
    
    </style>
    <div class="note">
        <div class="note-header">
            <span class="title">Title</span>
            <span class="pin">Pin</span> 
        </div>
        <span class="date">13.11.2022</span>
        <hr>

        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora libero repudiandae ullam rerum, in, sunt laboriosam sed quod officiis accusamus error blanditiis ea, consectetur amet quia assumenda eveniet nobis tenetur?</span>
        <div class="color-picker-container">
            <input type="color" class="color-picker"></input>
        </div>
    </div>  
`

class NoteCard extends HTMLElement {
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('note-card', NoteCard);
