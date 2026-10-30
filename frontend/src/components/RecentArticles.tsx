import { articles } from '../data/article'
import ArticleCard from './ArticleCard'

export default function RecentArticles() {
    const recentArticles = [...articles].sort((a,b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3)

    return (
        <section aria-labelledby="recent-articles-title">
            <h2 id="recent-articles-title">Recent Drives</h2>

            <div className="article-grid">
                {recentArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </section>
    )
}