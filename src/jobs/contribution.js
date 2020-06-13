import schedule from 'node-schedule';
import Models from '../model';
import calculateInterest from '../utilies/interest';

async function Contribution() {
  try {
    const contributions = await Models().contribution.getAll();
    if (contributions) {
      contributions.forEach(async (contribution) => {
        const newBalance = calculateInterest(contribution.currentBalance);
        const oldBalance = contribution.currentBalance;
        const { driverId } = contribution;
        await Models().contribution.addContribution({ newBalance, oldBalance, driverId });
      });
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}

const weeklyInterest = schedule.scheduleJob('* * * * * 7', async (fireDate) => {
  try {
    console.log(`This job was supposed to run at ${fireDate}, but actually ran at ${new Date()}`);
    await Contribution();
  } catch (error) {
    console.log(`This job scheduled at ${fireDate}, returned this error ${error}`)
  }
});

export default weeklyInterest;
