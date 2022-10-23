import React from 'react'

const Refuse = () => {
    return (
        <div flex flex-wrap justify-center>
<h1>5 benefits of refusing to buy the brand new goods</h1> <br />

<p>Battling the cost of living crisis</p>
<p>Reduce carbon emissions and water waste</p>
<p>Help other people with decluttering</p>
<p>Saving the limited resources</p>
<p>Fefuse to follow the social addiction</p> <br />


<label for="reason">What is your reason?</label>

<select id="reason">
  <option value="money">Money</option>
  <option value="future">Future of the planet</option>
  <option value="carbon">Carbon emissions</option>
</select>
        </div> 


     );
}
 
export default Refuse;