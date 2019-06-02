import React from 'react';


class Filter extends React.Component{

    constructor(props) {
        super(props);
        this.search = React.createRef();
        this.state = {
            search: "",
            obj: {},
            type: ""
        }

        this.searchData = this.searchData.bind(this);

      }
      componentDidMount(){
        
        if(this.state.obj.genre===undefined || this.state.obj.author===undefined ){
            this.setState({obj: {genre: this.props.datalist.genre, author: this.props.datalist.author}})
        }
      }

      searchData(event){



        const type = event.currentTarget.dataset.type;
        const val = event.currentTarget.value;
        
        if(type=="input"){
            this.setState({search: val});
            return this.props.updateData({
                search: val,
                searchArray: this.state.obj
            })
        }

        const values = Array.from(event.currentTarget.options).map((el) => el.selected ? el.value : undefined).filter((a)=> a!==undefined && a!=="input");     
        this.state.obj[type] = values;
        
        this.props.updateData({
            search: this.state.search,
            searchArray: this.state.obj
        })

      }

    render(){
        const data = this.props.datalist;

        const genreslist = data.genre;
        const authorlist = data.author;

        const genres = genreslist.map((item, i)=>{
            return (<option key={item+i} value={item}>{item}</option>)
        });
        const authors = authorlist.map((item, i)=>{
            return (<option key={item+i} value={item}>{item}</option>)
        });
        return(
            <div className="filter">
                <div><input ref={this.search} data-type="input" type="text" onChange={this.searchData}/></div>
                <select ref={this.search} onChange={this.searchData} size="10" data-type="genre" className="genre" key="genre" multiple>{genres}</select> 
                <select ref={this.search} onChange={this.searchData} size="10" data-type="author" className="authors" key="authors" multiple>{authors}</select>
               
            </div>
        );
    }
}

export default Filter;