TYPE=$1
COMPNAME=${2:-"MyComp"}

mkdir "src/$TYPE/$COMPNAME"
echo "
import React from 'react';
const $COMPNAME = ():JSX.Element => 
{
    return (
        <div className='$COMPNAME'>
        <h1>Implement $COMPNAME</h1>
        </div>
    )
}
export default $COMPNAME;" >> "src/$TYPE/$COMPNAME/index.tsx"
echo "//helper goes here for $COMPNAME
export type" $COMPNAME"Props = object
export {}">> "src/$TYPE/$COMPNAME/helper.ts"