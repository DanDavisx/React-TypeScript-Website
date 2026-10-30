import type { Article } from '../data/article'

type ArticleCardProps = {
    article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
    return (
        <article className="article-card">
            <img src={article.image} alt={article.imageAlt}/>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <a className="btn btn-b1" href={`/articles/${article.slug}`}>Read →</a>
        </article>
    )
}