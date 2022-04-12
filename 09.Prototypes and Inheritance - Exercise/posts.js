function solve(){

    class Post {
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let result = [super.toString()];
            result.push(`Rating: ${this.likes - this.dislikes}`);
            
            if(this.comments.length > 0){
                result.push(`Comments:`);

                for (const comment of this.comments) {
                    result.push(` * ${comment}`);
                }
            }

            return result.join('\n');
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;

            return this;
        }

        toString(){
            let result = [super.toString()];
            result.push(`Views: ${this.views}`);

            return result.join('\n');
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}