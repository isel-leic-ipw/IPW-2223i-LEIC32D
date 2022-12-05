import path from 'path'

export function getImage(req, resp){
    //TODO imgs
    const fileOptions = {
		root:  'imgs',
		dotfiles: 'deny'
	}
    
    resp.sendFile(req.params.imageId,fileOptions)
}