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
    }
    .note-header {
        display: flex;
        justify-content: space-between;
    }
    .title {
        font-size: 1.5rem;
        width: 80%;
        word-wrap: break-word;
    }
    .title:read-only {
        border: none;
        background: #cce6ff;
        color: #293d3d;
    }
    .pin {
        opacity: 50%;
    }
    .pin:hover {
        opacity: 100%;
        cursor: pointer;
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
    .content {
        min-height: 60%;
    }
    .content:read-only {
        border: none;
        background: #cce6ff;
        color: #293d3d;
    }
    
    </style>
    <div class="note">
        <div class="note-header">
            <input id="title" class="title"placeholder="Title" readonly></input>
            <span id="pin" class="pin">Pin</span> 
        </div>
        <span id="date" class="date">13.11.2022</span>
        <hr>
        <textarea id="contetnt" class="content" readonly></textarea>
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
