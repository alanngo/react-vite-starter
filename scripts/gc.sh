COMP=${1:-"MyComp"}
mkdir "src/components/$COMP"
echo "
import React from 'react';
const $COMP = ():JSX.Element => 
{
    return (
        <div className='$COMP'>
        <h1>Implement $COMP</h1>
        </div>
    )
}
export default $COMP;" >> "src/components/$COMP/index.tsx"
echo "//helper goes here for $COMP
export type" $COMP"Props = object
export {}">> "src/components/$COMP/helper.ts"