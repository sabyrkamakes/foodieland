import './InstagramView.scss'
import { Image } from 'minista'
import Section from '@/layouts/Section'
import Grid from '@/layouts/Grid'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import { instagramPosts } from './InstagramView.data'

export default () => {
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
