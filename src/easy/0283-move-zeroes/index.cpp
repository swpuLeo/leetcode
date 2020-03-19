/* 思路：此题可以采用双指针的方式，如果输出结果不考虑顺序的情况下，我们就可以采取类似于快速排序的前后指针的方式进行前面一个指针找出为0的后面指针找出不为0的然后交换即可，
但是此题需要限制相对顺序，所以我们可以在此基础上面进行修改，刚开始时两个指针（索引）均为0，然后我们就开始遍历，
如果遇到了0就停下来，此时i指针就指向了一个为0的位置， 此时我们应该与i位置之后一个不为0的位置进行交换，索引我们需要此时让j = i + 1，
然后又从j开始遍历直到找出一个不为0的位置，然后再讲i, j位置进行交换即可，由于我们每次找到的一个为0 的位置需要的是和他后面第一个不为0的位置交换，
所以进行寻找不为0的值位置是遍历开始应该从j开始遍历。*/
class Solution {
public:
	void moveZeroes(vector<int>& nums) {
		int i = 0;
		int j = 0;
		while (j < nums.size())
		{

			while (i < nums.size() && nums[i] != 0)i++;
			j = i + 1;
			while (j < nums.size() && nums[j] == 0)j++;
			if (j < nums.size())
			{
				nums[i] = nums[j];
				nums[j] = 0;
			}
			i++;
		}
	}
};