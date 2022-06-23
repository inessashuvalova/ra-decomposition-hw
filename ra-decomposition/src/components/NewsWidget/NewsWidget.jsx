import NewsItem from "./NewsList/NewsItem/NewsItem";
import NewsList from "./NewsList/NewsList";
import shortid from 'shortid'
import './NewsWidget.css'

export default function NewsWidget(props) {
    return (
        <NewsList {...props}>
        {
            (newsCategory)  => {
                const currentCategory = props.news.filter((category) => category.categoryName === newsCategory)[0];
                const result = []

                currentCategory.categoryItems.map((item) => (
                    result.push(
                        <NewsItem key={shortid.generate()} {...item}/> 
                        )
                ))
                return result;
            }      
        
        }        
        </NewsList>
      );
}