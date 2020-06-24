import React from 'react';
import Vscode from '../assets/images/editors/img_vscode.png';
import Atom from '../assets/images/editors/img_atom.png';
import Sublime from '../assets/images/editors/img_sublime.png';
import Brackets from '../assets/images/editors/img_brackets.png';
import Pycharm from '../assets/images/ide/img_pycharm.jpg';
import Visual from '../assets/images/ide/img_visualstudio.png';
import Intellij from '../assets/images/ide/img_intellij.png'
import Eclipse from '../assets/images/ide/img_eclipse.png';

export const EditorsList = [
    {   
        id:"1",
        name:"Vscode",
        source:Vscode,
        url:"https://code.visualstudio.com/",
    },
    {   
        id:"2",
        name:"Atom",
        source:Atom,
        url:"https://atom.io/",
    },
    {   
        id:"3",
        name:"Sublime",
        source:Sublime,
        url:"https://www.sublimetext.com/",
    },
    {   
        id:"4",
        name:"Brackets",
        source:Brackets,
        url:"http://brackets.io/",
    },
    {   
        id:"5",
        name:"pycharm",
        source:Pycharm,
        url:"https://www.jetbrains.com/pycharm/",
    },
    {   
        id:"6",
        name:"Visual Studio",
        source:Visual,
        url:"https://visualstudio.microsoft.com/vs/",
    },
    {   
        id:"7",
        name:"Intellij",
        source:Intellij,
        url:"https://www.jetbrains.com/idea/",
    },
    {   
        id:"8",
        name:"Eclipse",
        source:Eclipse,
        url:"https://www.eclipse.org/ide/",
    },
]