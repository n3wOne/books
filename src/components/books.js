import React from 'react';
import Filter from './filter.js';
import SingleBook from './singlebook.js';

class Books extends React.Component{ 
    constructor(props){
        super(props);

        let genreslist = [];
        let authorlist = [];
        this.props.data.map((item)=>{
           genreslist.push(item.genre), authorlist.push(item.author);
        });
        genreslist = genreslist.filter((i,pos,arr)=>arr.indexOf(i)===pos);
        authorlist = authorlist.filter((i,pos,arr)=>arr.indexOf(i)===pos);
        
        this.state = {
            search: "",
            lists: {genre: genreslist, author: authorlist}
        }
        this.updateData = this.updateData.bind(this);
    }

    updateData = (value)=>{
        this.setState({search: value.search, type: value.type, searchArray: value.searchArray})
    }
 

    componentWillMount(){
        this.setState({searchArray: this.state.lists});
    }

    render(){
        const data = this.props.data;
        let bookTemplate;
        let books = data
        .filter((el)=> {return (this.state.searchArray.author.includes(el.author) 
            && this.state.searchArray.genre.includes(el.genre)) 
            && (el.genre.match(this.state.search) || el.author.match(this.state.search) || el.book.match(this.state.search));
        });
        
        bookTemplate = books.map((item,i)=>{
            return <SingleBook author={item.author} book={item.book} genre={item.genre} key={item.id} data={item} />
        })

        return(
            <React.Fragment>
                <Filter datalist={this.state.lists} updateData={this.updateData} />
               {!bookTemplate.length && <div>Нет данных</div>}
               {bookTemplate.length > 0 && <table className="books" border="1" cellPadding="0" cellSpacing="0">
                <thead><tr><th>Автор</th><th>Название</th><th>Жанр</th></tr></thead>
                <tbody>
                
                    {bookTemplate}
                    </tbody>
                </table>}
            </React.Fragment>
        )
    }
}

export default Books;