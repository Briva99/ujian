import React, { Component } from 'react'
import { Text,View,Scrollview } from 'react-native'
import styles from './Style'
import {Button,PermissionsAndroid,Image} from 'react-native'
import {
    ActionsContainer,
   
    FieldsContainer,
    Fieldset,
    Form,
    FormGroup,
    Input,
    Label,
    Switch,
    Select
    
} from 'react-native-clean-form'

const lstGender = [
    {label:'--Pilih Gender--', value:'pilih Gender'},
    {label: 'Pria', value: 'Pria'},
    {label: 'Wanita', value: 'Wanita'},
    
  ]

  const lstStatus = [
      {label:'--Pilih Status--', value:'--Pilih Status--'},
      {label: 'Single', value:'Single'},
      {label: 'Merried', value:'Merried'}
  ]

export default class Adduser extends Component {
    render() {
        return (
            <Form>
            <FieldsContainer>
                <Fieldset label="Input User">
                    <FormGroup style={styles.FormGroup}>
                        <Label>Nama</Label>
                        <Input  placeholder ="Masukkan Nama"/>
                        {/* <Input placeholder="Nama"  onChangeText={(nama) => this.setState({ nama : nama})} /> */}
                    </FormGroup>
                    <FormGroup style={styles.FormGroup}>
                        <Label>Gender</Label>
                      <Select
                                  name="lstGender"
                                  label="Gender"
                                  options={lstGender}
                                  placeholder="Gender"
                                //   onValueChange={(laporan) => this.setState({ laporan : laporan})}
                         />
                         </FormGroup>
                    <FormGroup style={styles.FormGroup}>
                        <Label>Umur</Label>
                        <Input placeholder="Masukkan Umur"/>
                        {/* <Input placeholder="Masukkan Umur" onChangeText={(email) => this.setState({ email : email})} /> */}
                    </FormGroup>
                      
                      <FormGroup style={styles.FormGroup}>
                        <Label>Status</Label>
                      <Select
                                  name="lstStatus"
                                  label="Gender"
                                  options={lstStatus}
                                  placeholder="Status"
                                //   onValueChange={(laporan) => this.setState({ laporan : laporan})}
                         />
                         </FormGroup>
                         
                      <Label>Location</Label>
                      <Input name="Location" label="Location" placeholder=""  />
                       {/* <Input name="keterangan" label="Keterangan" placeholder="" multiline={true} numberOfLines={5}  inlineLabel={false}  onChangeText={(keterangan) => this.setState({ keterangan : keterangan})} />  */}
                     </Fieldset>
                                        {/* <View style={styles.image}>
                                            <Image
                                            style={styles.cameraContainer}
                                            source={{uri: this.state.uri}}
                                            />
                                        </View> */}
                
            </FieldsContainer>
                                 {/* <Button
                                    title="Take image"
                                    onPress={()=>{
                                    if(this.requestPermission()){
                                    
                                    this.captureCamera();
                                    
                                    }
                                
                                    }
                                    
                                    }
                                    
                                    style={styles.Button}
                                /> */}
                                <ActionsContainer>
                                <Button title ="Submit">Save</Button>
                                    {/* <Button title ="Submit" onPress={this.submitData}>Save</Button> */}
                                </ActionsContainer>
        </Form>
        )
    }
}
