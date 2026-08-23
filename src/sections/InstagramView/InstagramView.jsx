import './InstagramView.scss'
import { Image } from 'minista'
import Section from '@/layouts/Section'
import Grid from '@/layouts/Grid'
import post1Img from '@/assets/images/instagram-posts/1.jpg'
import post2Img from '@/assets/images/instagram-posts/2.jpg'
import post3Img from '@/assets/images/instagram-posts/3.jpg'
import post4Img from '@/assets/images/instagram-posts/4.jpg'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export default () => {
  const instagramPosts = [post1Img, post2Img, post3Img, post4Img]

  return (
    <div className="instagram-view">
      <Section
        title="Check out @foodieland on Instagram"
        titleId="instagram-post-title"
        description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
        mode="vertical"
      >
        <div className="instagram-view__body">
          <Grid columns={4}>
            {instagramPosts.map((postImage, index) => (
              <Image src={postImage} key={index} />
            ))}
          </Grid>
          <Button href="/" mode="large">
            <span>Visit Our Instagram</span>
            <Icon name="instagram" hasFill />
          </Button>
        </div>
      </Section>
    </div>
  )
}
