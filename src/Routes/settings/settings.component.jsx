import Sidebar from '../../Components/sidebar/sidebar.component';
import Section from '../../Components/section/section.component';
import Button from '../../Components/button/button.component';
import './settings.styles.scss';

function Settings () {
	return (
		<main className='settings-container'>
			<Sidebar />
			{/*sections in own component? list?*/}
			<Section areaName='sec-1'>
				<div>
					<h2>Email Address</h2>
					<p>placeholderemail@google.com</p>
				</div>

				<Button type='button' buttonType='settings'>Change Email Address</Button>
			</Section>

			<Section areaName= 'sec-2'>
				<h2>Change Password</h2>
				<Button type='button' buttonType='settings'>Send Link</Button>
			</Section>

			<Section areaName = 'sec-3'>
				<h2>Delete Account</h2>

				<Button type='button' buttonType='delete'>Delete</Button>
			</Section>
		</main>

	)
}

export default Settings;