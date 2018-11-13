import React from 'react'
import './UserProfile.styl'
import { observer, inject } from 'mobx-react'
import InputLabel from '@material-ui/core/InputLabel'
import GridItem from '../shared/Grid/GridItem'
import GridContainer from '../shared/Grid/GridContainer'
import CustomInput from '../shared/CustomInput/CustomInput'
import Button from '../shared/CustomButtons/Button'
import Card from '../shared/Card/Card'
import CardHeader from '../shared/Card/CardHeader'
import CardAvatar from '../shared/Card/CardAvatar'
import CardBody from '../shared/Card/CardBody'
import CardFooter from '../shared/Card/CardFooter'
import avatar from '../../assets/img/faces/marc.jpg'

const UserProfile = () => (
  <div>
    <GridContainer>
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="primary">
            <h4 className="card-title-white">Edit Profile</h4>
            <p className="card-category-white">Complete your profile</p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={5}>
                <CustomInput
                  labelText="Company (disabled)"
                  id="company-disabled"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    disabled: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <CustomInput
                  labelText="Username"
                  id="username"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Email address"
                  id="email-address"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="First Name"
                  id="first-name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Last Name"
                  id="last-name"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="City"
                  id="city"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Country"
                  id="country"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <CustomInput
                  labelText="Postal Code"
                  id="postal-code"
                  formControlProps={{
                    fullWidth: true
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <InputLabel style={{ color: '#AAAAAA' }}>About me</InputLabel>
                <CustomInput
                  labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                  id="about-me"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <Button color="primary">Update Profile</Button>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card profile>
          <CardAvatar profile>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={avatar} alt="..." />
            </a>
          </CardAvatar>
          <CardBody profile>
            <h6 className="card-category">CEO / CO-FOUNDER</h6>
            <h4 className="card-title">Alec Thompson</h4>
            <p className="description">
              Don`t be scared of the truth because we need to restart the human
              foundation in truth And I love you like Kanye loves Kanye I love
              Rick Owens’ bed design but the back is...
            </p>
            <Button color="primary" round>
              Follow
            </Button>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  </div>
)

export default inject('uiStore')(observer(UserProfile))